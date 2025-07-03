import styled, { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routers/routers";
import { createContext, useState } from "react";
import { Light, Dark } from "./styles/themes";
import { Device } from "./styles/breackpoints";
import { Sidebar } from "./components/organismos/sidebard/Sidebard";
export const ThemeContext = createContext(null);


function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? Light : Dark ;
  const themeStyle = theme ;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container className={sidebarOpen?'active':''}>
              <section className="ContentSidebard">
                  SIDEBAR
              </section>
              <section className="ContentMenuambur">
                Menu
              </section>
              <section className="ContentRoutes">
                <MyRoutes />
              </section>
              
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({theme}) => theme.bgtotal};

  .ContentSidebar{
  display: none;
  }
  .ContentMenuambur{
  display:block;
  position:absolute;
  left:20px;
  }

  @media ${Device.tablet}{
  grid-template-columns: 65px 1fr;

  &.active{
   grid-template-columns:220px 1fr;

  }
  .ContentSidebar{
  display: initial;
  }
  .ContentMenuambur{
  display:none;
 
  }

  .ContentRoutes{
    grid-column:1;
    width:100%;
    @media ${Device.tablet}{
    grid-column:2;           
    }
    
  }


  }
`;

export default App;
