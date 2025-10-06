import type { JSX } from "@emotion/react/jsx-runtime";
import { useEffect, useState } from "react";
import type { ConfigType } from "../../../../mocks/config/types";

const ConfigCard = ({
  ico,
  name,
  id,
  handleUpdatedConfig,
}: {
  ico: JSX.Element;
  name: string;
  id: string;
  handleUpdatedConfig: (newItem: ConfigType[0]) => void;
}) => {
  const [form, setForm] = useState<ConfigType[0] | null>({
    queryType: "",
    value: "",
    unit: "",
    name,
    widget_id: id,
    visible: false,
  });

  const handleUpdateForm = ({
    min,
    max,
    unit,
    visible,
  }: {
    min?: string;
    max?: string;
    unit?: string;
    visible?: boolean;
  }) => {
    form &&
      setForm({
        ...form,
        queryType: min ?? form.min,,
        value: min ?? form.min,
        min: min ?? form.min,
        max: max ?? form.max,
        unit: unit ?? form.unit,
        visible: visible ?? form.visible,
      });
  };

  useEffect(() => {
    form && handleUpdatedConfig(form);
    console.log(form);
  }, [form]);

  return (
    <div className="flex mt-5 mr-5 flex-col shadow-xl w-xs h-90 p-8  rounded-lg dark:bg-gray-50 dark:text-gray-800 items-center">
      <div className="flex justify-between space-x-8">
        <div className="flex justify-center items-center  h-20">
          <div className="flex items-center justify-center">{ico}</div>
          <span className="text-2xl font-semibold mt-2 ml-2 ">{name}</span>
        </div>
      </div>

      <div className="minmax flex flex-col w-36 items-start">
        {name === "temperature" && (
          <div className="mt-3 inputContainer flex justify-between w-full items-center">
            <span>Type of query</span>
            <select
              onChange={(e) => handleUpdateForm({ min: e.target.value })}
              className="w-20 h-10 bg-gray-100 pl-5"
              name=""
              id=""
            >
              <option value="">Lower than</option>
              <option value="">Greater than</option>
            </select>
          </div>
        )}
        {name !== "rain" && (
          <div className="mt-3 inputContainer flex justify-between w-full items-center">
            <span>Value</span>
            <input type="number"></input>
          </div>
        )}
        <div className="mt-3 inputContainer flex justify-between w-full items-center">
          <span>unity</span>
          <select
            defaultValue="Pick a color"
            className="select bg-gray-100 w-20 h-10 "
            onChange={(e) => handleUpdateForm({ unit: e.target.value })}
          >
            <option>-</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="visible mt-3 inputContainer flex justify-between w-full items-center">
          visible
          <input
            onChange={(e) => handleUpdateForm({ visible: !form?.visible })}
            type="checkbox"
            checked={form?.visible}
            className="w-13 h-8 toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfigCard;
