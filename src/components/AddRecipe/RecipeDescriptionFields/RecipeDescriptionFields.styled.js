import styled from 'styled-components';
export const Description = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    gap: 50px;
  }
`;

export const ImgUploadWrap = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    margin-bottom: 0;
  }
`;

export const InputUpload = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const InputDescriptionMainWrap = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.desk}) {
    margin-top: 0;
  }
`;

export const InputDescriptionWrap = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const InputDescription = styled.input`
  padding-bottom: 19px;
  width: 343px;
  height: 43px;
  border: none;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  background: transparent;
  @media screen and (min-width: ${props => props.theme.breakpoints.tab}) {
    font-weight: ${({ theme }) => theme.fontWeights.s};
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;

export const SelectDescription = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;
