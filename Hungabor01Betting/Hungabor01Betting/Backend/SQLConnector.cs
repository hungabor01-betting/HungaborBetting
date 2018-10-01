using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Web;

namespace Hungabor01Betting
{
  public static class SQLConnector
  {
    private static string ConnectionString = "";
    private static readonly string ServerName = "localhost\\SQLEXPRESS";
    private static readonly string DataBaseName = "Hungabor01-Betting";
    private static readonly string UserName = "Hungabor01-Betting";
    private static readonly string Password = "eJlLhLDJTpb6TIVKJK9qw6bLnNFUQsPirmXKpyJ8SN4=";
    private static SqlConnection Connection = null;

    private static void CreateConnectionString()
    {
      ConnectionString =
        "Data Source=" + ServerName+ ";" +
        "Initial Catalog=" + DataBaseName + ";" +
        "User id=" + UserName + ";" +
        "Password=" + Encrytor.Decrypt(Password) + ";";
    }

    private static void OpenConection()
    {
      Connection = null;
      try
      {        
        if (ConnectionString == "")
        {
          CreateConnectionString();
        }
        Connection = new SqlConnection(ConnectionString);        
        Connection.Open();
      }
      catch(Exception e)
      {
        Logger.LogException(Events.OpenConnectionError, e);
      }
    }

    private static void CloseConnection()
    {
      try
      { 
        Connection?.Close();
      }
      catch(Exception e)
      {
        Logger.LogException(Events.CloseConnectionError, e);
      }
}

    public static void ExecuteInsert(string[] aQueries)
    {      
        OpenConection();
      
        SqlCommand cmd = Connection?.CreateCommand();
        SqlTransaction transaction = Connection?.BeginTransaction();
        cmd.Connection = Connection;
        cmd.Transaction = transaction;
        try
        {
          int i = 0;
          try
          {          
            while (i < aQueries.Length)
            {
              cmd.CommandText = aQueries[i];
              cmd.ExecuteNonQuery();
              i++;
            }
          }
          catch (Exception e1)
          {
            Logger.LogException(Events.ExecuteInsertError, e1, aQueries[i]);
          }

          transaction.Commit();
        }
        catch (Exception e2)
        {
          Logger.LogException(Events.CommitError, e2);
          try
          {
            transaction.Rollback();
          }
          catch(Exception e3)
          {
          Logger.LogException(Events.RollBackError, e3);
          }
        }
        finally
        {
          CloseConnection();
        }
    }

    public static DataSet ExecuteSelect(string aQuery)
    {      
      OpenConection();

      DataSet results = new DataSet();      
      try
      {
        SqlCommand cmd = new SqlCommand(aQuery, Connection);
        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
        adapter.Fill(results);
      }
      catch (Exception e)
      {        
        Logger.LogException(Events.ExecuteSelectError, e, aQuery);
      }
      finally
      {
        CloseConnection();
      }
      return results;
    }
  }
}
