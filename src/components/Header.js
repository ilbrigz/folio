import React, { Component } from "react";
import { as, Button, Heading, InlineFlex, Flex, Box, styled } from "reakit";
import MediaQuery from "react-responsive";
import MobileNav from "./MobileNav";
import { Link } from "gatsby";

const StyledHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.darkestBlue};
`;

const StyledMenu = styled(InlineFlex)`
  &&&& {
    align-items: center !important;
    flex-grow: 1;
    text-transform: uppercase;
  }
`;

const StyledItem = styled(Box)`
  cursor: pointer;
  padding: 0 1rem;
  text-shadow: none !important;
  :hover {
    color: ${props => props.theme.colors.lightOrange};
  }
`;

const TabItem = as("a")(StyledItem);

const StyledLink = styled(TabItem)`
  a {
    text-decoration: none;
    text-shadow: none;
    color: ${props => props.theme.colors.white};
    background-image: none;
  }
  :hover a {
    color: ${props => props.theme.colors.lightOrange};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.openNav = this.openNav.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth > 599) {
      this.setState({ isOpen: false });
    }
  }
  openNav() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <StyledHeader as="header" padding=".5rem 1rem">
        <StyledMenu as="nav" padding="1rem" justifyContent="start">
          <MediaQuery maxWidth={600}>
            <MobileNav openNav={this.openNav} isOpen={this.state.isOpen} />
          </MediaQuery>
          <MediaQuery minWidth={601}>
            <StyledLink as="span">
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  backgroundImage: "none",
                  textShadow: "none"
                }}
                activeStyle={{
                  color: "#d4a782"
                }}
              >
                home
              </Link>
            </StyledLink>
            <StyledLink as="a" href="#projects">
              projects
            </StyledLink>
            <StyledLink as="a" href="#contact">
              contacts
            </StyledLink>
          </MediaQuery>
        </StyledMenu>

        <InlineFlex padding="1rem">
          <Button>
            <Link
              to="/blog"
              style={{
                textDecoration: "none",
                backgroundImage: "none",
                textShadow: "none",
                color: "white"
              }}
            >
              Visit My Blog
            </Link>
          </Button>
        </InlineFlex>
      </StyledHeader>
    );
  }
}

export default Header;
