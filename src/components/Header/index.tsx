import React, { useEffect, useState } from "react";
import {
  Container,
  HeaderLeft,
  HeaderRight,
  HeaderRightText,
  Logo,
  Menu,
  MenuItem,
  MenuItemSmall,
  MenuSmall,
  MenuSmallTop,
} from "./styles";
import { useNavigate } from "react-router-dom";

/**
 * 헤더 공통 컴포넌트입니다.
 *  @author 신정은
 */
const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const menuItems = [
    { name: "마이페이지", url: "/mypage", img: "/assets/icon/icon_mypage.svg" },
    { name: "필터 추천", url: "/keywordsearchstep1", img: "/assets/icon/icon_filter.svg" },
    { name: "커뮤니티", url: "/community", img: "/assets/icon/icon_board.svg" },
  ];

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    const token = localStorage.getItem("my-token");
    setToken(token);
  };

  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <HeaderLeft onClick={() => handleMenuClick()}>
        <img src="/assets/icon/icon_menu.svg" />
      </HeaderLeft>
      <Logo onClick={() => navigate("/")}>
        <div className="logo__kr">센카이브</div>
        <div className="logo__en">Scenchive</div>
      </Logo>
      <Menu>
        {menuItems.map((item, index) => {
          return <MenuItem key={index} onClick={() => navigate(item?.url)}>{item.name}</MenuItem>;
        })}
      </Menu>
      {toggle && (
        <MenuSmall>
          {!token && (
            <MenuSmallTop>
              <div onClick={() => navigate("/login")}>로그인</div>
              <div>|</div>
              <div onClick={() => navigate("/signup")}>회원가입</div>
            </MenuSmallTop>
          )}
          {menuItems.map((item, index) => {
            return (
              <MenuItemSmall onClick={() => navigate(item?.url)} border={index !== 2} key={index}>
                <img src={item.img} />
                <div>{item.name}</div>
              </MenuItemSmall>
            );
          })}
        </MenuSmall>
      )}
      {!token ? (
        <HeaderRight>
          <HeaderRightText onClick={() => navigate("/login")}>
            로그인
          </HeaderRightText>
          <HeaderRightText>|</HeaderRightText>
          <HeaderRightText onClick={() => navigate("/signup")}>
            회원가입
          </HeaderRightText>
        </HeaderRight>
      ) : (
        <HeaderRight>
          <img src="/assets/icon/icon_notice.svg" onClick={()=>navigate('/notice')}/>
        </HeaderRight>
      )}
    </Container>
  );
};

export default Header;
