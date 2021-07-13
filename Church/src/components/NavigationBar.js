import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Styles = styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
`;

const Navbar = {
    Wrapper: styled.nav`
        display: flex;
        flex: 1;
        align-self: flex-start;
        padding: 1rem 3rem;
        justify-content: space-between;
        align-items: center;
    `,
    Logo: styled.div`
        border: 1px solid grey;
        padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style: none;
    `,
    Item: styled.li`
        padding: 0 1rem;
        cursor: pointer;
    `,
};

const MobileNav = {
    Wrapper: styled(Navbar.Wrapper)`
        flex: 1;
        position: fixed;
        width: 100vw;
        bottom: 0;
        justify-content: center;
    `,
    Logo: styled(Navbar.Logo)`

    `,
    Items: styled(Navbar.Items)`
        flex: 1;
        padding: 0 2rem;
        justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
    `,
};

const isMobile = windowDimension <= 640;

const NavigationBar = props => {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        function handleWindow() {
            setWindowDimnesion(window.innerWidth);
        }

        window.addEventListener('resize', handleWindow);
        return () => window.removeEventListeneR('resize', handleWindow);
    }, []);

    return (
        <div className="NavigationBar">
            <Styles>
                {isMobile ? (
                    <MobiNav.Wrapper>
                        <MobileNav.Items>
                            <MobileNav.Item>Home</MobileNav.Item>
                            <MobileNav.Item>About</MobileNav.Item>
                            <MobileNav.Item>Join</MobileNav.Item>
                        </MobileNav.Items>
                    </MobiNav.Wrapper>
                    ) : (
                    <Navbar.Wrapper>
                        <Navbar.Logo></Navbar.Logo>
                        <Navbar.Items>
                            <Navbar.Item>Home</Navbar.Item>
                            <Navbar.Item>About</Navbar.Item>
                            <Navbar.Item>Join</Navbar.Item>
                        </Navbar.Items>
                    </Navbar.Wrapper>
                    )
                }
            </Styles>
        </div>
    );
}

