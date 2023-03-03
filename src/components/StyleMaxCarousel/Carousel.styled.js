import styled, { css } from 'styled-components';

export const Viewport = styled.div`
display:flex;
  overflow: hidden;
  max-width: 100%;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`;

export const Container = styled.div`
display:flex;
  will-change: transform;
  max-width: ${({ width }) => width};
`;

export const CarouselButton = styled.button`
  margin-top: ${({ marginBtnTop }) => marginBtnTop};
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  transition: opacity 0.3s linear;
`;
export const CarouselButtonLeft = styled.button`
  margin-top: ${({ marginBtnTop }) => marginBtnTop};
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  
  transition: opacity 0.3s linear;
`;
export const CarouselMiniButton = styled.button`
  box-sizing: border-box;
  margin-top: ${({ marginBtnTop }) => marginBtnTop};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  position: relative;
  max-height: 32px;
  min-height: 32px;
  z-index: 2;
  padding: 0;
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  transition: opacity 0.3s linear;
`;
export const Image = styled.img`
  width: ${({ maxWidth }) => maxWidth};
  height: 580px;
  border-radius: 4px;
`;
export const ImageWrapper = styled.div`
display:flex;
  width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ maxWidth }) => maxWidth};
  height: 580px;
`;
export const ImagesCounter = styled.div`
display:flex;
  width: 100%;
  justify-content: center;
  color: black;
  font-weight: 500;
  font-size: 14px;
  padding-top: 12px;
`;
