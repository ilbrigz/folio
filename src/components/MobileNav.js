import React from "react";
import { Box, Overlay, Divider, List, styled, Backdrop } from "reakit";
import { CollapseReverse } from "react-burgers";
import { Link } from "gatsby";

const StyledOverlayShow = styled(Overlay.Show)`
  & {
    button {
      padding: 0;
      margin-top: 0.5rem;
    }
  }
`;
const StyledList = styled(List)`
  &&&& {
    li {
      padding: 1rem 2rem;

      a {
        text-transform: uppercase;
        color: black;
      }
    }
  }
`;

const MobileNav = props => (
  <Box alignSelf="flex-start">
    <Overlay.Container>
      {overlay => (
        <>
          <StyledOverlayShow as="div" padding={0} {...overlay}>
            <CollapseReverse
              width={30}
              color="white"
              onClick={() => props.openNav()}
              style={{
                color: "white"
              }}
              active={props.isOpen}
            />
          </StyledOverlayShow>
          <Backdrop
            onClick={() => props.openNav()}
            fade
            as={Overlay.Hide}
            {...overlay}
          />
          <Overlay
            onClick={() => props.openNav()}
            as={Overlay.Hide}
            fade
            slide="bottom"
            {...overlay}
            width="60%"
            height="80%"
            borderRadius={0}
          >
            <StyledList>
              <Divider />
              <li>
                <Link
                  style={{ backgroundImage: "none" }}
                  to="/"
                  activeStyle={{
                    color: "#1ca086"
                  }}
                >
                  home
                </Link>
              </li>
              <Divider />
              <li>
                <Link style={{ backgroundImage: "none" }} to="/#projects">
                  project
                </Link>
              </li>
              <Divider />
              <li>
                <Link style={{ backgroundImage: "none" }} to="/#contact">
                  contacts
                </Link>
              </li>
              <Divider />
            </StyledList>
          </Overlay>
        </>
      )}
    </Overlay.Container>
  </Box>
);

export default MobileNav;
