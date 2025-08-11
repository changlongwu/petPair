import RabbitCard from "../components/rabbitDisplay/RabbitCard";
import rabbitData from '../rabbits.json'
import React, { useState, useEffect } from 'react';
import './RabbitDisplayPage.css'
import SearchIcon from '../assets/images/search.svg'
import SortIcon from '../assets/images/filter-left.svg'
import { Link } from "react-router-dom";
import Filter from "../components/filter/Filter.jsx";

const RabbitDisplayPage = ()=>{
    const [rabbits, setRabbits] = useState([]);
    const [filteredNumbers, setFilteredNumbers]= useState(0);
    const [showFilter, setShowFilter] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [originalRabbits, setOriginalRabbits] = useState([]);
    
    useEffect(()=>{
        setRabbits(rabbitData.rabbits)
        setOriginalRabbits(rabbitData.rabbits)
        setFilteredNumbers(rabbitData.rabbits.length)
    },[])

    // 搜索功能
    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
        
        if (!searchValue.trim()) {
            // 如果搜索框为空，显示所有兔子
            setRabbits(originalRabbits);
            setFilteredNumbers(originalRabbits.length);
            return;
        }

        const filtered = originalRabbits.filter(rabbit => {
            const name = rabbit.card_page.name.toLowerCase();
            const sex = rabbit.card_page.sex.toLowerCase();
            const searchLower = searchValue.toLowerCase();
            
            return name.includes(searchLower) || sex.includes(searchLower);
        });

        setRabbits(filtered);
        setFilteredNumbers(filtered.length);
    };

    // 处理搜索按钮点击
    const handleSearchButtonClick = () => {
        // 搜索按钮点击时重新应用搜索（如果需要的话）
        handleSearch(searchTerm);
    };

    // 处理回车键搜索
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchButtonClick();
        }
    };

    // 应用筛选
    const applyFilter = (filters) => {
        let filtered = originalRabbits;

        // 先应用搜索过滤
        if (searchTerm.trim()) {
            filtered = filtered.filter(rabbit => {
                const name = rabbit.card_page.name.toLowerCase();
                const sex = rabbit.card_page.sex.toLowerCase();
                const searchLower = searchTerm.toLowerCase();
                
                return name.includes(searchLower) || sex.includes(searchLower);
            });
        }

        // 按 sex 过滤
        if (filters.sex.length > 0) {
            filtered = filtered.filter(r =>
                filters.sex.includes(r.card_page.sex)
            );
        }

        // 按 age 过滤
        if (filters.age.length > 0) {
            filtered = filtered.filter(r => {
                const age = r.card_page.age;
                return filters.age.some(ageRange => {
                    switch(ageRange) {
                        case "Baby": return age >= 0 && age <= 1;
                        case "Young": return age > 1 && age <= 3;
                        case "Adult": return age > 3 && age <= 6;
                        case "Senior": return age > 6;
                        default: return false;
                    }
                });
            });
        }

        // 按 adoption fee 过滤
        if (filters.fee.length > 0) {
            filtered = filtered.filter(r => {
                const fee = r.card_page.adoption_fee;
                return filters.fee.some(feeRange => {
                    switch(feeRange) {
                        case "$0": return fee === 0;
                        case "Under $50": return fee > 0 && fee < 50;
                        case "$50+": return fee >= 50;
                        default: return false;
                    }
                });
            });
        }

        // 这里你可以加 time slider 的逻辑
        // if (filters.time > 0) {...}

        setRabbits(filtered);
        setFilteredNumbers(filtered.length);
        setActiveFilters(filters);
        setShowFilter(false);
    };

    // 清除所有筛选
    const clearAllFilters = () => {
        setRabbits(originalRabbits);
        setFilteredNumbers(originalRabbits.length);
        setActiveFilters({});
        setSearchTerm('');
    };

    // 检查是否有活跃的筛选
    const hasActiveFilters = () => {
        return Object.values(activeFilters).some(filter => 
            Array.isArray(filter) ? filter.length > 0 : filter > 0
        ) || searchTerm.trim() !== '';
    };

    return (
        <div className="display-page-container">  
            {/* search bar */}
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearchButtonClick}>
                    <img src={SearchIcon} alt="" />
                </button>
            </div>

            <div className="sort-part">
                <button className="sort-button" onClick={()=>{setShowFilter(true)}}>
                    <img src={SortIcon} alt="" className="sort-icon"/>
                    <span>Filter by</span>
                </button>

                {hasActiveFilters() && (
                    <button className="clear-filters-button" onClick={clearAllFilters}>
                        Clear All Filters
                    </button>
                )}

                <p>{filteredNumbers} results</p>
            </div>

            <div className="display-body">
                {   
                    rabbits.length > 0 ? (
                        rabbits.map(rabbit=>(
                            <Link to={`/display/detail/${rabbit.card_page.id}` } key={rabbit.id} className="rabbit-link">
                                <RabbitCard key={rabbit.card_page.id} rabbit={rabbit}/>
                            </Link>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No rabbits found matching your search criteria.</p>
                            <p>Try adjusting your search terms or filters.</p>
                        </div>
                    )
                }
                
            </div>
            {showFilter && (
                <Filter
                    onApply={applyFilter}
                    onClose={() => setShowFilter(false)}
                />
            )}
        </div>

    )
}

export default RabbitDisplayPage
