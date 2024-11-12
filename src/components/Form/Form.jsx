import styled from "styled-components";

const FormElem = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  margin-bottom: 50px;
`;
const Input = styled.input`
  background-color: #191414;
  width: 10vw;
  margin-bottom: 4dvh;
  padding: 14px;
  display: block;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  font-family: "Nunito Sans";
  &:focus, &:active: {
    background-color: #191414;
    outline: 1.4px solid #1db954;
  }
`;

const SubmitBtn = styled.button`
  background-color: #1db954;
  width: 5vw;
  color: #fff;
  padding: 7px;
  text-align: center;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
`;

const Form = ({ setLyrics }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const songObj = {
      author: e.currentTarget.author.value.trim().replace("", "%20"),
      title: e.currentTarget.title.value.trim().replace("", "%20"),
    };
    const resp = await fetch(
      `https://api.lyrics.ovh/v1/${songObj.author}/${songObj.title}`
    );
    const { lyrics } = await resp.json();
    if (!lyrics) {
      console.log("Not found");
      return;
    }
    setLyrics(lyrics);
  };
  return (
    <FormElem onSubmit={handleSubmit}>
      <Input name="author" placeholder="Author" type="text" />
      <Input name="title" placeholder="Title" type="text" />
      <SubmitBtn type="submit">Search!</SubmitBtn>
    </FormElem>
  );
};

export default Form;
