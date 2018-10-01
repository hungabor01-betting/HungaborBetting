using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hungabor01Betting
{
  public static class Events
  {
    // public static Event name = new Event(3001, "");

    //SQL errors
    public static Event OpenConnectionError = new Event(3001, "Failed to establish connection to the database.");
    public static Event ExecuteInsertError = new Event(3002, "Error while executing an insert query.");
    public static Event ExecuteSelectError = new Event(3003, "Error while executing a select query.");
    public static Event CommitError = new Event(3004, "Error while commiting a transaction.");
    public static Event RollBackError = new Event(3005, "Error while rollbacking a transaction.");
    public static Event CloseConnectionError = new Event(3006, "Failed to close the connection to the database.");
  }
}
