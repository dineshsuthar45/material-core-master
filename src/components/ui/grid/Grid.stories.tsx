import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MGrid } from "./Grid";

export default {
  title: "Components/Grid",
  component: MGrid,
  tags: ["autodocs"],
  argTypes: {
    loadFromURL: {
      type: "string",
    },
    rowSelection: {
      control: "inline-radio",
      options: ["single", "multiple"],
    },
    sideBar: {
      control: {
        type: "object",
      },
      description: "Specifies the side bar components.",
      table: {
        defaultValue: {
          hiddenByDefault: false,
          position: "right",
          toolPanels: [
            {
              id: "columns",
              labelDefault: "Columns",
              labelKey: "columns",
              iconKey: "columns",
              toolPanel: "agColumnsToolPanel",
              minWidth: 225,
              maxWidth: 225,
              width: 225,
            },
          ],
        },
      },
    },
    skipInferNumberColumn: {
      type: "boolean",
    },
    skipMaxTwoLineHeaderText: {
      type: "boolean",
    },
    size: {
      control: "inline-radio",
      options: ["comfy", "compact"],
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "!^on.*",
    },
    controls: {
      exclude: /onCellClicked/g,
    },
  },
} as Meta<typeof MGrid>;

const Template: StoryFn<typeof MGrid> = (args) => (
  <div style={{ width: 872, height: 500 }}>
    <MGrid {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    columnDefs: [
      {
        children: [
          {
            field: "athlete",
            width: 180,
            filter: "agSetColumnFilter",
            headerName: "Athlete details within a two line sentence",
            filterParams: {
              buttons: ["reset"],
            },
          },
          {
            field: "age",
            width: 90,
            filter: "agNumberColumnFilter",
            type: "numericColumn",
            headerClass: "m-header-cell-text-default",
            headerName: "Age details with a long title",
          },
          { headerName: "Country", field: "country", width: 140 },
          { headerName: "Hidden", field: "hidden", hide: true },
        ],
      },
      {
        headerName: "Sports Results",
        children: [
          { field: "sport", width: 140 },
          {
            columnGroupShow: "closed",
            field: "total",
            width: 100,
            filter: "agNumberColumnFilter",
          },
          {
            columnGroupShow: "open",
            field: "gold",
            width: 100,
            filter: "agNumberColumnFilter",
          },
          {
            columnGroupShow: "open",
            field: "silver",
            width: 100,
            filter: "agNumberColumnFilter",
          },
          {
            columnGroupShow: "open",
            field: "bronze",
            width: 100,
            filter: "agNumberColumnFilter",
          },
        ],
      },
    ],
    sideBar: {
      hiddenByDefault: false,
      position: "right",
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          minWidth: 225,
          maxWidth: 225,
          width: 225,
          toolPanelParams: {
            suppressPivots: true,
            suppressPivotMode: true,
          },
        },
      ],
    },
    rowData: [
      {
        athlete: "Paco",
        age: 30,
        country: "Spain",
        sport: "Football",
        total: 20,
        gold: 10,
        silver: 7,
        bronze: 3,
        hidden: "MVP",
      },
      {
        athlete: "Artemis",
        age: 30,
        country: "Cyprus",
        sport: "Football",
        total: 10,
        gold: 5,
        silver: 2,
        bronze: 3,
      },
      {
        athlete: "Ri",
        age: 30,
        country: "Russia",
        sport: "Football",
        total: 7,
        gold: 2,
        silver: 1,
        bronze: 4,
      },
      {
        athlete: "Alex",
        age: 30,
        country: "USA",
        sport: "Football",
        total: 5,
        gold: 2,
        silver: 1,
        bronze: 2,
      },
    ],
    rowSelection: "multiple",
    size: "comfy",
    onCellClicked: (event) => console.log("cellClicked", event),
  },
};
