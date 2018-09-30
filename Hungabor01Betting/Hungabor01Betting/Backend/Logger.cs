using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Globalization;

namespace Hungabor01Betting
{
  public static class Logger
  {
    private const int MaxEventLogEntryLength = 30000;
    private static string Source; 

    public static void LogInformation(Event ev)
    {
      if (ev != null)
        Log(ev, EventLogEntryType.Information);
    }

    public static void LogWarning(Event ev)
    {
      if (ev != null)
        Log(ev, EventLogEntryType.Warning);
    }

    public static void LogException(Event ev, Exception ex)
    {
      if (ev != null && ex != null)
      {
        ev.decsription = ev.decsription + '\n'+  ex.ToString();
        Log(ev, EventLogEntryType.Error);
      }
    }

    private static void Log(Event ev, EventLogEntryType entryType)
    {
      string possiblyTruncatedMessage = EnsureLogMessageLimit(ev.decsription);
      EventLog.WriteEntry(GetSource(), possiblyTruncatedMessage, entryType, ev.id);      
    }

    private static string GetSource()
    {
      if (string.IsNullOrWhiteSpace(Source))
      {
        Source = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
      }      
      return Source;
    }

    // Ensures that the log message entry text length does not exceed the event log viewer maximum length of 32766 characters.
    private static string EnsureLogMessageLimit(string logMessage)
    {
      if (logMessage.Length > MaxEventLogEntryLength)
      {
        string truncateWarningText = string.Format(CultureInfo.CurrentCulture, "... | Log Message Truncated [ Limit: {0} ]", MaxEventLogEntryLength);

        // Set the message to the max minus enough room to add the truncate warning.
        logMessage = logMessage.Substring(0, MaxEventLogEntryLength - truncateWarningText.Length);

        logMessage = string.Format(CultureInfo.CurrentCulture, "{0}{1}", logMessage, truncateWarningText);
      }

      return logMessage;
    }
  }
}
