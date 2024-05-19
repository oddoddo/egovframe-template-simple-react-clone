import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import * as EgovNet from 'api/egovFetch'

import URL from 'constants/url'
import CODE from 'constants/code'
import { getSessionItem, setSessionItem } from 'utils/storage'

const EgovHeader = () => {
    const sessionUser = getSessionItem('loginUser') // 세션 사용자 정보
    const sessionUserId = sessionUser?.id // 세션 사용자 ID
    const sessionUserName = sessionUser?.name // 세션 사용자 이름
    const sessionUserSe = sessionUser?.se // 세션 사용자 구분

    return (
        <header>
            <div className="inner">
                <Link to={URL.MAIN} className="ico lnk_go_template" target="_blank">
                    홈페이지 템플릿 소개 페이지로 이동
                </Link>
            </div>

            <h1 className="logo">
                <Link to={URL.MAIN} className="w">
                    <img src="/assets/images/logo_w.png" alt="표준프레임워크포털 eGovFrame 심플홈페이지" />
                </Link>
                <Link to={URL.MAIN} className="m">
                    <img src="/assets/images/logo_m.png" alt="표준프레임워크포털 eGovFrame 심플홈페이지" />
                </Link>
            </h1>

            <div className="gnb">
                <h2 className="blind">주메뉴</h2>
                <ul>
                    <li>
                        <NavLink to={URL.ABOUT} className={({ isActive }) => (isActive ? 'cur' : '')}>
                            사이트소개
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={URL.INTRO} className={({ isActive }) => (isActive ? 'cur' : '')}>
                            정보마당
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={URL.SUPPORT} className={({ isActive }) => (isActive ? 'cur' : '')}>
                            고객지원
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={URL.INFORM} className={({ isActive }) => (isActive ? 'cur' : '')}>
                            알림마당
                        </NavLink>
                    </li>
                    {sessionUserSe === 'USR' && (
                        <li>
                            <NavLink to={URL.ADMIN} className={({ isActive }) => (isActive ? 'cur' : '')}>
                                사이트관리
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default EgovHeader
