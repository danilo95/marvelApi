import React, { useState } from 'react';
import { Input, Checkbox, Select, InputNumber } from 'antd';
import { generateQueryParams } from '../utils/Utils';
import { FilterOutlined } from '@ant-design/icons';
import {
	FilterContainer,
	FiltersWrapper,
	IconContainer,
	FilterOptions,
} from './Style';

const { Search } = Input;
const { Option } = Select;

const ComicsFilters = () => {
	const [activeFilter, setActiveFilter] = useState(false);
	const [filters, setFilters] = useState({
		format: '',
		title: '',
		orderBy: '',
	});
	const changeFilterState = () => {
		setActiveFilter(!activeFilter);
	};
	const onSearch = (value) => {
		let tempData = filters;
		tempData['title'] = value;
		setFilters({ ...tempData });
		console.log(generateQueryParams(tempData));
	};

	const handleSelect = (value) => {
		let tempData = filters;
		tempData['format'] = value;
		setFilters({ ...tempData });
	};
	const handleCheckbox = (e) => {
		let tempData = filters;
		if (e.target.checked) {
			tempData['orderBy'] = 'issueNumber';
		} else {
			tempData['orderBy'] = '';
		}
		setFilters({ ...tempData });
	};

	return (
		<FilterContainer>
			<Search
				placeholder="Try typing Ghost Rider"
				enterButton="Search"
				size="large"
				onSearch={onSearch}
				name="format"
			/>
			<FiltersWrapper activeFilter={activeFilter}>
				<IconContainer onClick={changeFilterState}>
					<FilterOutlined /> Filters
				</IconContainer>
				<FilterOptions>
					<div>
						<Checkbox onChange={handleCheckbox}>
							Order by issue number.
						</Checkbox>
					</div>
					<div>
						<p>Choose a format</p>
						<Select
							style={{ width: 120 }}
							name="format"
							onChange={handleSelect}
						>
							<Option value=""></Option>
							<Option value="comic">comic</Option>
							<Option value="magazine">magazine</Option>
							<Option value="trade paperback">
								trade paperback
							</Option>
							<Option value="hardcover">hardcover</Option>
							<Option value="digest">digest</Option>
							<Option value="graphic novel">graphic novel</Option>
							<Option value="digital comic">digital comic</Option>
							<Option value="infinite comic">
								infinite comic
							</Option>
						</Select>
					</div>
					<div>
						<p>Add a issue number</p>
						<InputNumber min={0} onChange={console.log(1)} />
					</div>
				</FilterOptions>
			</FiltersWrapper>
		</FilterContainer>
	);
};

export default ComicsFilters;
