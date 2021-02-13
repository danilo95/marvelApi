import React from 'react';
import { Input, Checkbox } from 'antd';
import {
	getAllCharacters,
	loadingCharacters,
} from '../../Actions/CharactersActions';
import { generateQueryParams } from '../utils/Utils';
import { useDispatch } from 'react-redux';
import { CharactersFiltersWrapper } from './Style';

const { Search } = Input;

const CharactersFilters = ({ filters, setFilters }) => {
	const dispatch = useDispatch();
	const onSearch = (value) => {
		let tempData = filters;
		tempData['nameStartsWith'] = value;
		setFilters({ ...tempData });
		let queryParams = generateQueryParams(tempData);
		dispatch(loadingCharacters());
		dispatch(getAllCharacters(queryParams));
	};

	const handleCheckbox = (e) => {
		let tempData = filters;
		if (e.target.checked) {
			tempData['orderBy'] = 'name';
		} else {
			tempData['orderBy'] = '';
		}
		setFilters({ ...tempData });
	};

	return (
		<CharactersFiltersWrapper>
			<div>
				<Search
					placeholder="Try typing Ghost Rider"
					enterButton="Search"
					size="large"
					onSearch={onSearch}
					name="format"
				/>
			</div>
			<div>
				<Checkbox onChange={handleCheckbox}>Order by name.</Checkbox>
			</div>
		</CharactersFiltersWrapper>
	);
};

export default CharactersFilters;
