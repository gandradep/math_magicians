import renderer from 'react-test-renderer';
import CalcButtons from '../components/SingleDiv';

it('SingleDiv renders correctly', () => {
  const tree = renderer
    .create(<CalcButtons />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
