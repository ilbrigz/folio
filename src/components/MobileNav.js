import React from "react";
import { Box, Overlay, Divider, List, styled, Backdrop } from "reakit";
import { CollapseReverse } from "react-burgers";

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
              style={{ color: "white" }}
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
                <Box as="a">home</Box>
              </li>
              <Divider />
              <li>
                <Box as="a">projects</Box>
              </li>
              <Divider />
              <li>
                <Box as="a">contacts</Box>
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
