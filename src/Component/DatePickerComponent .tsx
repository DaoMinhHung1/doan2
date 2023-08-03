import React, { useState } from "react";
import { DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Dayjs } from "dayjs";

interface DatePickerComponentProps {
  onChange: (date: Dayjs | null) => void;
  selectedDate: Dayjs | null;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  onChange,
  selectedDate,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date: any) => {
    onChange(date);
    setShowDatePicker(false);
  };

  return (
    <div style={{ display: "inline-block" }}>
      <div onClick={() => setShowDatePicker(!showDatePicker)}>
        <CalendarOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
      </div>
      {showDatePicker && (
        <div style={{ position: "absolute", zIndex: 999 }}>
          <DatePicker value={selectedDate} onChange={handleDateChange} format="DD/MM/YYYY" />
        </div>
      )}
    </div>
  );
};

export default DatePickerComponent;
