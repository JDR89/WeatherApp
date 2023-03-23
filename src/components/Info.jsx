export const Info = ({ clima, formattedDate, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <h2 className="temp mb-0">{Math.trunc(clima.temperatura)}°</h2>

          <div className="mb-2 d-flex flex-nowrap">
            <h5 className="fs-1">{clima.ciudad}</h5>

            <img
              className="ms-4"
              src={`http://openweathermap.org/img/w/${clima.icon}.png`}
            />
          </div>

          <div className="mb-2 d-flex flex-nowrap">
            <p>{formattedDate}</p>
            <span className="iconitoDos">{clima.main}</span>
          </div>
        </div>
      )}
    </>
  );
};
