import { StyledButton } from './components/Button.styled';
import { AppContainer } from './components/Container.styled';
import { GlobalStyles } from './GlobalStyles.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton buttonLabel="Click here" backgroundColor="violet">
        {" "}
      </StyledButton>
    </AppContainer>
  );
}

export default App;
