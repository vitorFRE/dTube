import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import data from '../../../data.json';

const StyledHeader = styled.div`
  .profile_pic {
    border-radius: 50px;
  }
  .user_info {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 15px 0 15px 0;
  }
  .user_info_text h1 {
    font-family: 'Helvetica';
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .user_info_text h1 span {
    font-size: 1rem;
    color: #522ba7;
  }
  .user_info_text p {
    font-family: 'Helvetica';
    font-size: 1rem;
    color: #666666;
    font-weight: 400px;
  }
  .banner_bg img {
    height: 230px;
    width: 100%;
    object-fit: cover;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="banner_bg">
        <Image
          className="banner_bg"
          src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6012&q=80"
          alt="banner background"
          width={2400}
          height={230}
          blurDataURL="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
          placeholder="blur"
        />
      </div>
      <div className="user_info container">
        <Image
          className="profile_pic"
          src="/images/profile.png"
          alt="profile image"
          width={80}
          height={80}
        />

        <div className="user_info_text">
          <h1>
            {data.name} <span>({data.github})</span>
          </h1>
          <p>{data.job}</p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
