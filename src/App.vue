<template>
  <div id="app">
    A -------------------------------------------------------------------------
    <template>
      <el-table
        A
        :data="tableData"
        width="100%"
        @expand="rowExpand"
        ref="refTable"
        row-key="tab"
        :expand-row-keys="expands"
        @row-click="rowClick"
        @expand-change="expandChange"
        border
        resizable
      >
        <el-table-column type="expand" show-overflow-tooltip>
          <template slot-scope="props">
            <el-table
              :data="props.row.sub_tasks"
              min-width="100%"
              :show-header="false"
            >
              <el-table-column
                label="sub-task-name"
                prop="name"
                min-width="20%"
              ></el-table-column>

              <el-table-column min-width="80%">
                <template slot-scope="props">
                  <el-table :data="props.row.statistic" :show-header="false">
                    <el-table-column
                      label="statistic-name"
                      prop="name"
                      min-width="30%"
                    ></el-table-column>

                    <el-table-column min-width="70%">
                      <template slot-scope="props">
                        <el-table :data="props.row.subst" :show-header="false">
                          <el-table-column
                            label="region"
                            prop="region"
                            min-width="30%"
                          ></el-table-column>

                          <el-table-column
                            label="progress"
                            prop="progress"
                            min-width="70%"
                          ></el-table-column>
                        </el-table>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="db" prop="db"> </el-table-column>
        <el-table-column label="tab" prop="tab"> </el-table-column>
        <el-table-column label="uuid" prop="uuid"> </el-table-column>
      </el-table>
    </template>

    B -------------------------------------------------------------------------

    <template>
      <el-table :data="tableData2" width="100%" border resizable>
        <el-table-column type="expand">
          <template slot-scope="props">
            <span> {{ props.row.ids }} </span>
          </template>
        </el-table-column>
        <el-table-column label="db" prop="db"> </el-table-column>
        <el-table-column label="tab" prop="tab"> </el-table-column>
        <el-table-column label="uuid" prop="uuid"> </el-table-column>
        <el-table-column label="result" prop="result"> </el-table-column>
        <el-table-column label="count" prop="count"> </el-table-column>
      </el-table>
    </template>

    C -------------------------------------------------------------------------

    <template>
      <el-table :data="tableData2" width="100%" border resizable>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table :data="props.row.ids" :show-header="false">
              <el-table-column label="ids">
                <template slot-scope="scope">
                  <span> {{ scope.row }} </span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="db" prop="db"> </el-table-column>
        <el-table-column label="tab" prop="tab"> </el-table-column>
        <el-table-column label="uuid" prop="uuid"> </el-table-column>
        <el-table-column label="result" prop="result"> </el-table-column>
        <el-table-column label="count" prop="count"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tableData: [
        {
          task_type: "revise",
          db: "sang",
          tab: "tab1",
          uuid: "0946347f-543f-4003-803d-8abc16672b7e",
          result: "不一致",
          curr_task: "g2r",
          sub_tasks: [
            {
              name: "r2g",
              statistic: [
                {
                  name: "us_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "us",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
                {
                  name: "cn_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "cn",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
              ],
            },
            {
              name: "g2r",
              statistic: [
                {
                  name: "us_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "us",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
                {
                  name: "cn_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "cn",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          task_type: "revise",
          db: "sang",
          tab: "tab2",
          uuid: "bf1d25a9-5990-47d2-a8e1-6f52761365ae",
          result: "不一致",
          curr_task: "g2r",
          sub_tasks: [
            {
              name: "r2g",
              statistic: [
                {
                  name: "us_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "us",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
                {
                  name: "cn_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "cn",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
              ],
            },
            {
              name: "g2r",
              statistic: [
                {
                  name: "us_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "us",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
                {
                  name: "cn_to_global",
                  subst: [
                    {
                      region_type: "src",
                      region: "cn",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                    {
                      region_type: "dst",
                      region: "gg",
                      off: "1000",
                      cnt: "2000",
                      progress: "1000/2000",
                      finished: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      tableData2: [
        {
          db: "sang1",
          tab: "tab11",
          uuid: "0946347f-543f-4003-803d-8abc16672b7e",
          result: "不一致",
          count: 3,
          ids: [5484564868564, 1863514684188, 1463486419848],
        },
        {
          db: "sang1",
          tab: "tab12",
          uuid: "0946347f-543f-4003-803d-8abc16672b7e",
          result: "不一致",
          count: 3,
          ids: [5484564868564, 1863514684188, 1463486419848],
        },
      ],
    };
  },
  methods: {
    //在<table>里，我们已经设置row的key值设置为每行数据id：row-key="id"
    rowClick(row, column) {
      //调用table的方法,展开/折叠 行
      // 展开下拉箭头的展开
      let open = true;
      if (this.expands.indexOf(row.tab) >= 0) {
        open = false;
      }
      // 点击这一行进行展开
      this.$refs.refTable.toggleRowExpansion(row, open);
    },
    // 点击下拉按钮的触发函数
    expandChange(row) {
      let index = this.expands.indexOf(row.tab);
      if (index < 0) {
        this.expands.push(row.tab);
      } else {
        this.expands.splice(index, 1);
      }
      // 把点击的行的值存在localstorage中，页面刷新时默认展开
      localStorage.setItem("expands", JSON.stringify(this.expands));
    },
  },
  mounted() {
    this.expands = localStorage.getItem("expands")
      ? JSON.parse(localStorage.getItem("expands"))
      : [];
  },
};
</script>

<style>
.el-table--border,
.el-table--group {
  border: none;
}
.el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: none;
}
.el-table--border td:nth-last-of-type(1) {
  border-right: none;
}
.el-table--border::after,
.el-table--group::after {
  width: 0;
}
.expand .el-table__expand-column .cell {
  display: none;
}
/* 表格鼠标悬浮时的样式（高亮） */
.el-table--enable-row-hover .el-table__body tr:hover {
  background: rgb(250, 221, 184);
  border: 1px solid #635b31;
}
/*表格鼠标悬停的样式（背景颜色）*/
.el-table tbody tr:hover > td {
  background-color: #fff1e3 !important;
}
</style>
