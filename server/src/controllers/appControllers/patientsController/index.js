const mongoose = require('mongoose');
const Model = mongoose.model('Patients');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Patients');

delete methods['delete'];

methods.create = async (req, res) => {
  const { isDefault } = req.body;

  if (isDefault) {
    await Model.updateMany({}, { isDefault: false });
  }

  const countDefault = await Model.countDocuments({
    isDefault: true,
  });

  const result = await new Model({
    ...req.body,

    isDefault: countDefault < 1 ? true : false,
  }).save();

  return res.status(200).json({
    success: true,
    result: result,
    message: 'payment mode created successfully',
  });
};

methods.delete = async (req, res) => {
  return res.status(403).json({
    success: false,
    result: null,
    message: "you can't delete payment mode after it has been created",
  });
};

methods.update = async (req, res) => {
  const { id } = req.params;
  const patients = await Model.findOne({
    _id: req.params.id,
    removed: false,
  }).exec();
  const { isDefault = patients.isDefault, enabled = patients.enabled } = req.body;

  // if isDefault:false , we update first - isDefault:true
  // if enabled:false and isDefault:true , we update first - isDefault:true
  if (!isDefault || (!enabled && isDefault)) {
    await Model.findOneAndUpdate({ _id: { $ne: id }, enabled: true }, { isDefault: true });
  }

  // if isDefault:true and enabled:true, we update other patients and make is isDefault:false
  if (isDefault && enabled) {
    await Model.updateMany({ _id: { $ne: id } }, { isDefault: false });
  }

  const patientsCount = await Model.countDocuments({});

  // if enabled:false and it's only one exist, we can't disable
  // if ((!enabled || !isDefault) && patientsCount <= 1) {
  //   return res.status(422).json({
  //     success: false,
  //     result: null,
  //     message: 'You cannot disable the patients because it is the only existing one',
  //   });
  // }

  const result = await Model.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  return res.status(200).json({
    success: true,
    message: 'patients updated successfully',
    result,
  });
};

module.exports = methods;
