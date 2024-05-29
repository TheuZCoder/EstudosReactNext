'use client';
import React, { use } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';
import Image from 'next/image';
import menu from '@/app/utils/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

function SideBar() {
  const { theme } = useGlobalState();

  const router = useRouter();

  const handlerClick = (link:string) => {
    router.push(link)
  };



  return <SidebarStyled theme={theme}>
    <div className="profile">
      <div className="profile-overlay"></div>
      <div className="image">
      <Image width={70} height={70} src='/images/profile.jpg' alt='profile' />
      </div>
      <h1>
        <span>Matheus</span>
        <span>Silva</span>
      </h1>
      <ul className="nav-itens">
        {menu.map((item) => {
          return <li className={`nav-item`} onClick={() => {
            handlerClick(item.link)
          }}>
            {item.icon}
            <Link href={item.link}>
              {item.title}
            </Link>
          </li>;
        })}
      </ul>
    </div>
  </SidebarStyled>;
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;
export default SideBar;