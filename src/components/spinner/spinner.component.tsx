import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay data-testid='spinner'>
    <SpinnerContainer></SpinnerContainer>
  </SpinnerOverlay>
);

export default Spinner;
