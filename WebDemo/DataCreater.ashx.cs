using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.Script.Serialization;

namespace WebDemo
{
    /// <summary>
    /// DataCreater 的摘要说明
    /// </summary>
    public class DataCreater : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string type=context.Request["type"];
            if (type == "data")
            {
                context.Response.Write(getJson());
            }
           
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
        private string getJson()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add(new DataColumn("studentid", typeof(string)));
            dt.Columns.Add(new DataColumn("name", typeof(string)));
            dt.Columns.Add(new DataColumn("age", typeof(int)));
            for (int i = 0; i < 20; i++)
            {
                DataRow dr = dt.NewRow();
                dr["studentid"] = i.ToString();
                dr["name"] = "名字" + i.ToString();
                dr["age"] = i;
                dt.Rows.Add(dr);
            }
            string rows = DataTableToJson(dt);
            string str = string.Empty;
            string total = dt.Rows.Count.ToString();
            str = "{\"total\":\"" + total + "\",\"rows\":" + rows + "}";
            return str;


        }
        /// <summary>
        /// 将DataTable转为Json字符串
        /// </summary>
        /// <param name="dt"></param>
        /// <returns></returns>
        public static string DataTableToJson(DataTable dt)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            System.Collections.ArrayList dic = new System.Collections.ArrayList();
            foreach (DataRow dr in dt.Rows)
            {
                System.Collections.Generic.Dictionary<string, object> drow = new System.Collections.Generic.Dictionary<string, object>();
                foreach (DataColumn dc in dt.Columns)
                {
                    drow.Add(dc.ColumnName, dr[dc.ColumnName].ToString().Trim());
                }
                dic.Add(drow);
            }
            //序列化  
            return jss.Serialize(dic);
        }
    }
}