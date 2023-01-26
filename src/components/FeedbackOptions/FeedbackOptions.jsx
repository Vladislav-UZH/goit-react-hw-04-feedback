import PropTypes from 'prop-types';
import { List, Item, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, updateStats }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item total={options} key={option}>
            <Btn
              onClick={() => {
                let satOption = option.toLowerCase();
                return updateStats(satOption);
              }}
            >
              {option}
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  updateStats: PropTypes.func.isRequired,
};

export default FeedbackOptions;
