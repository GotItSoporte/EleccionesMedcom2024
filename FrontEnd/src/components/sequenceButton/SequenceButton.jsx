import { Button } from '../../components';
import iconSend from '../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const SequenceButton = ({
  type,
  data,
  postData,
  postContinue,
  postSalida,
  postSalidaForzada,
  sequence,
  loading,
}) => {
  return (
    <>
      {data.length > 0 && (
        <div className="flex justify-center">
          {sequence === 0 && (
            <div className="p-2" onClick={async () => !loading && (await postData(type))}>
              <Button type="Control" rute="" name="Cargar datos" icon={iconSend} color="bg-green" loading={loading} />
            </div>
          )}
          {sequence > 1 && (
            <div className="p-2" onClick={async () => !loading && (await postContinue(type))}>
              <Button
                type="Control"
                rute=""
                name={`Continuar ${sequence - 1}`}
                icon={iconSend}
                color="bg-green"
                loading={loading}
              />
            </div>
          )}
          {sequence === 1 && (
            <div className="p-2" onClick={async () => !loading && (await postSalida(type))}>
              <Button type="Control" rute="" name={`Salida`} icon={iconSend} color="bg-red" loading={loading} />
            </div>
          )}

          <div className="p-2" onClick={async () => !loading && (await postSalidaForzada(type))}>
            <Button type="Control" rute="" name={`Salida Forzada`} icon={iconSend} color="bg-red" loading={loading} />
          </div>
        </div>
      )}
    </>
  );
};

SequenceButton.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  postData: PropTypes.func.isRequired,
  postContinue: PropTypes.func.isRequired,
  postSalida: PropTypes.func.isRequired,
  postSalidaForzada: PropTypes.func.isRequired,
  sequence: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
