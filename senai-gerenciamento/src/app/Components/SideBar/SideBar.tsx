'use client';
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function SideBar() {
    const context = useGlobalState();
    console.log(context);
  return (
    <div>
      <SidebarStyled>SideBar</SidebarStyled>
    </div>
  );
};

const SidebarStyled = styled.nav`

`;
export default SideBar;