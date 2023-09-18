import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Input from "@/components/Semantic/Header/Input";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from 'next/head'
interface SearchArrInner {
  facltNm: string;
  contentId: string;
}

interface HeaderProps {
  isInputExist: boolean;
  searchArr: SearchArrInner[];
  isSearching: boolean;
  changeInputValue: (event: React.ChangeEvent) => void;
  checkSearchPressEnter: (
    event: React.MouseEvent,
    idx: number,
    facltNm?: string,
    contentId?: string
  ) => void;
  clearSearchArr: () => void;
}

export default function Header({
  isInputExist = false,
  searchArr = [],
  changeInputValue,
  checkSearchPressEnter,
  clearSearchArr,
  isSearching,
}: HeaderProps) {
  const router = useRouter();
  return (
    <HeaderContainer>
      <ImgContainer onClick={() => router.push("/")}>
        <label htmlFor="search">
          <Image src="/mainlogo.png" alt="main image" width={200} height={100} objectFit="contain"></Image>
        </label>
      </ImgContainer>
      {isInputExist && (
        <Input
          id="search"
          searchArr={searchArr}
          isSearching={isSearching}
          changeInputValue={changeInputValue}
          checkSearchPressEnter={checkSearchPressEnter}
          clearSearchArr={clearSearchArr}
        ></Input>
      )}
      <HamburgerContainer>
        <GiHamburgerMenu size="50" />
      </HamburgerContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 10vw;
  min-width: 50px;
  margin: 20px;
  cursor: pointer;
  height:100px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10vw;
  margin: 20px;
`;