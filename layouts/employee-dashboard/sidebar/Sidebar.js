/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {MdMoveToInbox} from "react-icons/md"
import { VscSignOut } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutEmployee } from '../../../redux/auth/employeSlice';
import { employeeCompanies } from '../../../helpers/employeeCompanies';
import { Wrapper, SideNav} from 'styled-compnent/Sidebar';

export default function Sidebar() {
	const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
	const dispatch = useDispatch();
	const router = useRouter();

	console.log(logoutEmployee());

	useEffect(() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},[ router, isLoggedIn ]);

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
				    {employeeCompanies.map((company, index) => {
						console.log(company.item);
						return (
							<li key={index}>
								<Link href={company.route}>{company.item}</Link>
							</li>
						);
					})}
					<li className="inbox">
						<MdMoveToInbox className='text-2xl inline'/>
						<Link href={'/employee-dashboard/inbox'}>
							Inbox
						</Link>
						<span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
							3
						</span>
					</li>
				</SideNav>
				<div className="bottom">
					<span className = "bottom-item" onClick={() => LogoutFunc()}>
						<VscSignOut className="display-block" />
						<span className='block'>Logout</span>
					</span>
			    </div>
			</Wrapper>
		</SidebaarDiv>
	);
}

const SidebaarDiv = styled.div`
    width: 100%;
	height: 100%;
	margin-bottom: 1em;
`;
