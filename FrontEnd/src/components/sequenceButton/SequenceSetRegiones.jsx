import { Button } from '../../components';
import iconSend from '../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const SequenceSetRegiones = ({ type, data, postData, postContinue, sequence, loading }) => {
  return (
    <>
      {data.length > 0 && (
        <div className="flex justify-center">
          {sequence === 0 && (
            <div className="p-2" onClick={async () => !loading && (await postData(type))}>
              <Button type="Control" rute="" name="Cargar datos" icon={iconSend} color="bg-green" loading={loading} />
            </div>
          )}
          {sequence >= 1 && (
            <div className="p-2" onClick={async () => !loading && (await postContinue(type))}>
              <Button
                type="Control"
                rute=""
                name={`Continuar ${sequence}`}
                icon={iconSend}
                color="bg-green"
                loading={loading}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

SequenceSetRegiones.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  postData: PropTypes.func.isRequired,
  postContinue: PropTypes.func.isRequired,
  sequence: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
