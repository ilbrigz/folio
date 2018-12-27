import React, { Component } from "react";
import { as, Button, Heading, InlineFlex, Flex, Box, styled } from "reakit";
import MediaQuery from "react-responsive";
import MobileNav from "./MobileNav";

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
            <TabItem>home</TabItem>
            <TabItem>projects</TabItem>
            <TabItem>contacts</TabItem>
          </MediaQuery>
        </StyledMenu>

        <InlineFlex padding="1rem">
          <Button>Visit My Blog</Button>
        </InlineFlex>
      </StyledHeader>
    );
  }
}

export default Header;
