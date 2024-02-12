import PropTypes from 'prop-types';

export const FormFollower = ({
  index,
  OnChangeCedula,
  OnChangeNombre,
  OnChangeVotos,
  OnChangePorcentaje,
  DeleteCandidato,
}) => {
  return (
    <>
      <div className="shadow-md border border-gray-700 rounded-md ">
        <div className="md:inline-flex space-y-2 md:space-y-0 w-full p-4 text-white items-center">
          <h2 className="md:w-1/3 max-w-sm mx-auto text-xl text-center">
            Información Electoral <br></br>
            <span className="text-green">Candidato #{index + 1}</span>
          </h2>

          <div className="md:w-2/3 max-w-sm mx-auto">
            <div>
              <label className="text-sm text-gray-400">Cedula</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">
                  <svg fill="none" className="w-6  mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="1234"
                  onChange={OnChangeCedula}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400">Nombre</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">
                  <svg fill="none" className="w-6  mx-auto" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="Candidato electoral"
                  onChange={OnChangeNombre}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Votos</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6  mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="9999"
                  onChange={OnChangeVotos}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400">Porcentaje</label>
              <div className="w-full inline-flex border">
                <div className="w-1/12 pt-2 bg-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6  mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-11/12 focus:outline-none text-black p-2"
                  placeholder="99.99%"
                  onChange={OnChangePorcentaje}
                />
              </div>
            </div>
          </div>
        </div>
        {/*<hr />*/}

        <div className="w-full p-4 text-right text-gray-500">
          <button className="inline-flex items-center focus:outline-none mr-4" onClick={DeleteCandidato}>
            <svg fill="none" className="w-6 mr-2 text-red" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Eliminar Candidato
          </button>
        </div>
      </div>
    </>
  );
};

FormFollower.propTypes = {
  index: PropTypes.number.isRequired,
  OnChangeCedula: PropTypes.func.isRequired,
  OnChangeNombre: PropTypes.func.isRequired,
  OnChangeVotos: PropTypes.func.isRequired,
  OnChangePorcentaje: PropTypes.func.isRequired,
  DeleteCandidato: PropTypes.func.isRequired,
};
