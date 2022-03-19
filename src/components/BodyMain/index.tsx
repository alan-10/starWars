import { ReactNode } from 'react';

import {  Main, Content } from './styles';

interface TypeBodyMain {
  children: ReactNode;
}

export function BodyMain( { children }: TypeBodyMain){
  return (
    <Main>
      <Content>
        {children}
      </Content>
    </Main>
  );
}