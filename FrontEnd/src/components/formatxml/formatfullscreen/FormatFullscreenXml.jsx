import { Button } from '../../../components';
import iconSend from '../../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const FormatFullscreenXml = ({ CreateFile, data }) => {
  return (
    <div onClick={() => CreateFile(data)}>
      <Button type="Alert" rute="" name="Cargar Fullscreen" icon={iconSend} color="bg-green" loading={false} />
    </div>
  );
};

FormatFullscreenXml.propTypes = {
  CreateFile: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
