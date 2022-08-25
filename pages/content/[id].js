import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { getLocationBasedList, getImageList } from "../../core/api/axios";
import styled from "styled-components";
import Slider from "../../component/Slider";

const content = () => {
  const router = useRouter();
  const [content, setContent] = useState([]);
  const [imageLists, setImageLists] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    locationBasedList(1, router.query.mapX, router.query.mapY);
    imageList(1, router.query.id);
  }, [router.isReady]);

  async function locationBasedList(pageNo = 1, mapX, mapY) {
    const data = await getLocationBasedList(pageNo, mapX, mapY, 1000);
    setContent(data[0]);
  }

  async function imageList(pageNo = 1, contentId) {
    const data = await getImageList(pageNo, contentId);
    setImageLists(data);
  }

  return (
    <>
      <Body>
        <Main>
          <Title>🏕️ {content.facltNm}</Title>
          <Slider imgs={imageLists} />
        </Main>
      </Body>
    </>
  );
};

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 22vw * 2);
  height: auto;
  margin: 0vw 22vw;
`;

const Title = styled.div``;

export default content;