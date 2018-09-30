using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hungabor01Betting
{
  public class Event
  {
    public string decsription;
    public int id;   

    public Event(int aId, string aDescription)
    {
      this.id = aId;
      this.decsription = aDescription;
    }
  }
}
