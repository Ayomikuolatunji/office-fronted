/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { VscSignOut } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutEmployee } from '../../../redux/auth/employeSlice';
import { employeeCompanies } from '../../../helpers/employeeCompanies';
import { Wrapper, SideNav, MappedArray } from 'styled-compnent/Sidebar';

export default function Sidebar() {
	const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
	const dispatch = useDispatch();
	const router = useRouter();

	console.log(logoutEmployee());

	useEffect(
		() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},
		[ router, isLoggedIn ]
	);

	const LogoutFunc = () => {
		if (isLoggedIn) {
			router.push('/login');
			dispatch(logoutEmployee());
		}
	};
	return (
		<SidebaarDiv>
			<Wrapper>
				<div className="Title">
					<h5>Online Office</h5>
				</div>
				<SideNav>
					<ul className="SideNavList">
						{employeeCompanies.map((company, index) => {
							console.log(company.item);
							return (
								<MappedArray key={index}>
									<Link href={company.route}>{company.item}</Link>
								</MappedArray>
							);
						})}
						<li className="Found">
							<svg
								className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
								<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
							</svg>
							<Link href={'/employee-dashboard/inbox'} className="flex-1 ml-3 whitespace-nowrap">
								Inbox
							</Link>
							<span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
								3
							</span>
						</li>

						<li className="bottom">
							<span className = "bottom-item" onClick={() => LogoutFunc()}>
								<VscSignOut className="display-block" />
								<span className='block'>Logout</span>
							</span>
						</li>
					</ul>
				</SideNav>
			</Wrapper>
		</SidebaarDiv>
	);
}

const SidebaarDiv = styled.div`
	height: 100vh;
	position: fixed;
	background-color: #536c7c;
	margin-bottom: 1em;
`;
