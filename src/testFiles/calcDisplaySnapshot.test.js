import renderer from 'react-test-renderer';
import CalcDisplay from '../components/CalcDisplay';

it('CalcDisplay renders correctly', () => {
  const tree = renderer
    .create(<CalcDisplay />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
