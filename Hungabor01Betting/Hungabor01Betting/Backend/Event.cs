using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hungabor01Betting
{
  public class Event
  {
    public string Decsription;
    public int Id;   

    public Event(int aId, string aDescription)
    {
      this.Id = aId;
      this.Decsription = aDescription;
    }
  }
}
