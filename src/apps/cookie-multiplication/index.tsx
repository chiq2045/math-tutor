import { HTMLAttributes, InputHTMLAttributes, useState } from "react";

const maxGroups = 10;

const createArrayFromLength = (length: number) =>
  Array.from({ length }, (_, i) => i + 1);

const Input = (props: {
  input: InputHTMLAttributes<HTMLInputElement>;
  label: HTMLAttributes<HTMLLabelElement>;
}) => (
  <div>
    <label {...props.label} />
    <input {...props.input} />
  </div>
);

export const CookieMultiplication = () => {
  const [cookieGroups, setCookieGroups] = useState(0);
  const [numGroups, setNumGroups] = useState(0);

  return (
    <section>
      <div>
        <h2>Multiplication Practice</h2>
        <p>Learn multiplication by counting cookies!</p>
        <div>
          <Input
            {...{
              label: { children: "Number of cookies in a group" },
              input: {
                type: "number",
                value: cookieGroups,
                max: maxGroups,
                onChange: (e) => setCookieGroups(parseInt(e.target.value)),
              },
            }}
          />
          <Input
            {...{
              label: { children: "Number of groups" },
              input: {
                type: "number",
                value: numGroups,
                max: maxGroups,
                onChange: (e) => setNumGroups(parseInt(e.target.value)),
              },
            }}
          />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th />
              {createArrayFromLength(numGroups).map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr />
            {createArrayFromLength(cookieGroups).map((row) => (
              <tr key={row}>
                <th>{row}</th>
                {createArrayFromLength(numGroups).map((column) => (
                  <td key={column}>{row * column}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>
          {cookieGroups} x {numGroups} = {cookieGroups * numGroups} Cookies
        </p>
      </div>
    </section>
  );
};
