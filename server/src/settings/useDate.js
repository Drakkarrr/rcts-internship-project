const useDate = ({ settings }) => {
  const { rcts_app_date_format } = settings;

  const dateFormat = rcts_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
