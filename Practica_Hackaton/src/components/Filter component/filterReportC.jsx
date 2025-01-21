  import React, { useState } from 'react';
  import { Select, DatePicker, Space } from 'antd';
  import dayjs from 'dayjs';
  import isoWeek from 'dayjs/plugin/isoWeek';

  dayjs.extend(isoWeek);

  const FilterReportC = () => {
    const [dateRange, setDateRange] = useState('day');
    const [hotel, setHotel] = useState('hotel1');
    const [roomType, setRoomType] = useState('single');

    const { RangePicker } = DatePicker;

    const dateRangeOptions = [
      { value: 'day', label: 'Día' },
      { value: 'week', label: 'Semana' },
      { value: 'month', label: 'Mes' }
    ];

    const hotelOptions = [
      { value: 'hotel1', label: 'Hilton Garden' },
      { value: 'hotel2', label: 'Marriott International' },
      { value: 'hotel3', label: 'Holiday Inn' },
      { value: 'hotel4', label: 'Sheraton Hotels' },
      { value: 'hotel5', label: 'Four Seasons' }
    ];

    const roomTypeOptions = [
      { value: 'single', label: 'Individual - $100/noche' },
      { value: 'double', label: 'Doble - $180/noche' },
      { value: 'suite', label: 'Suite - $300/noche' },
      { value: 'executive', label: 'Ejecutiva - $250/noche' },
      { value: 'family', label: 'Familiar - $220/noche' }
    ];

    const handleDateRangeChange = (value) => {
      setDateRange(value);
    };

    const handleHotelChange = (value) => {
      setHotel(value);
    };

    const handleRoomTypeChange = (value) => {
      setRoomType(value);
    };

    return (
      <div className="filter-container">
        <Space direction="horizontal" size={12}>
          <Select
            placeholder="Seleccionar período"
            options={dateRangeOptions}
            onChange={handleDateRangeChange}
            defaultValue="day"
            style={{ width: 120 }}
          />
          <RangePicker
            picker={dateRange}
            format={dateRange === 'day' ? 'DD/MM/YYYY' : dateRange === 'week' ? 'WW/YYYY' : 'MM/YYYY'}
            defaultValue={[dayjs(), dayjs().add(7, 'days')]}
          />
          <Select
            placeholder="Seleccionar hotel"
            options={hotelOptions}
            onChange={handleHotelChange}
            defaultValue="hotel1"
            style={{ width: 200 }}
          />
          <Select
            placeholder="Tipo de habitación"
            options={roomTypeOptions}
            onChange={handleRoomTypeChange}
            defaultValue="single"
            style={{ width: 200 }}
          />
        </Space>
      </div>
    );
  };


  export default FilterReportC;