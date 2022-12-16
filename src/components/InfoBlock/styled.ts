import React from "react";
import styled from "styled-components";
export const HeadlinerText = styled.h2<{size?:string; height?:string; weight?: number}>`
  font-weight:${props => props.weight? props.weight: 600};
  font-size: ${props => props.size? props.size: "2.083333333333333vw"};
  line-height: ${props => props.height? props.height: "2.083333333333333vw"}; 
  font-family: Inter;
    
    
   
`
export const Headliner = styled.div`
  border-bottom: 1px solid #9EA3AA;
  min-height: 68px;
  margin-bottom: 40px;
  width: 100%; 
    
`