import { Badge } from 'antd';
import React from 'react';

const DepartmentBadge: React.FC<{ department: string }> = ({ department }) => {

    const color = () => {
        switch(department){
            case ('Sales'): {
                return 'gold'
            }
            case ('Chăm sóc khách hàng'): {
                return 'purple'
            }
            case ('Marketing'): {
                return 'green'
            }
            case ('Finance'): {
                return 'cyan'
            }
            case ('Human Resource'): {
                return 'red'
            }
            case ('Operations'): {
                return 'yellow'
            }
        }
    }

	return <Badge color={color()} />;
};

export default DepartmentBadge;
