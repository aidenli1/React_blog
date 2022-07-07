import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
    aligh-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-chid) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments } = props;

    return (
        <Wrapper>
            { comments && comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </Wrapper>
    );
}

export default CommentList