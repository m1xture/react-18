import styled from "styled-components";
import { useLyricsContext } from "../../contexts/LyricsContext";

const Block = styled.div`
  background-color: #191414;
  padding: 20px;
  width: 25vw;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  /* margin-top: auto; */
`;
const Text = styled.pre`
  color: #fff;
  /* text-wrap: balance; */
  font-style: oblique;
  /* text-align: center; */
`;

const Lyrics = () => {
  const { lyrics } = useLyricsContext();
  return (
    <Block>
      <Text>{lyrics}</Text>
    </Block>
  );
};
export default Lyrics;
