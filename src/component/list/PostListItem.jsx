import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    fiex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    backgound: white;
    :hover {
        background: lightgrey;
    }
`;

const TilteText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const { post, onClick } =props;

    return (
        <Wrapper onClick={onClick}>
            <TilteText>{post.title}</TilteText>
        </Wrapper>
    );
}

export default PostListItem;