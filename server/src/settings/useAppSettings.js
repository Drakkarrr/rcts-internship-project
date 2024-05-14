const useAppSettings = () => {
  let settings = {};
  settings['rcts_app_email'] = 'noreply@rctsapp.com';
  settings['rcts_base_url'] = 'https://cloud.rctsapp.com';
  return settings;
};

module.exports = useAppSettings;
