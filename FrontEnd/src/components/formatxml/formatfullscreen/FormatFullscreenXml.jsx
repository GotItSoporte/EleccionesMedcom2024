import { Button } from '../../../components';
import iconSend from '../../../assets/icons/send.svg';
import PropTypes from 'prop-types';

export const FormatFullscreenXml = ({ CreateFile, name, data }) => {
  return (
    <div onClick={() => CreateFile(name, data)}>
      <Button type="Alert" rute="" name="Cargar Fullscreen" icon={iconSend} color="bg-green" loading={false} />
    </div>
  );
};

FormatFullscreenXml.propTypes = {
  CreateFile: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
