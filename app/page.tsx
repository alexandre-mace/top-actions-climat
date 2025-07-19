"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import { climateActions, referenceData, getSimpleActionsData, getDetailedActionsData } from "@/lib/data";
import { chartConfig, getBarColor } from "@/lib/chart-config";


export default function Home() {
  const [showDetail, setShowDetail] = useState(false);
  
  const climateActionsData = getSimpleActionsData();
  const detailedModeData = getDetailedActionsData();
  const displayData = showDetail ? detailedModeData : [...climateActionsData, ...referenceData];
  
  
  return (
    <div className="min-h-screen bg-bg-cream font-sans">
      <div className="px-4 py-12">
        <div className="text-start mb-12 max-w-2xl mx-auto">
          <p className="text-4xl font-medium tracking-tighter">
            <span className="whitespace-nowrap">Découvrez le</span>{" "}
            <span className="text-primary-brand whitespace-nowrap">top des <span className={""}>actions</span></span><br/>{" "}
            <span className="whitespace-nowrap"> pour</span>{" "}
            <span className="whitespace-nowrap underline">réduire son <span className={""}>empreinte</span></span>{" "}
            <span className="whitespace-nowrap"> carbone</span>
          </p>
        </div>
        
        <div className="w-full">
          <div className="mb-6 flex justify-center items-center space-x-3">
            <Label htmlFor="detail-mode" className="text-lg font-medium cursor-pointer">
              Voir le détail
            </Label>
            <Switch
              id="detail-mode"
              checked={showDetail}
              onCheckedChange={setShowDetail}
            />
          </div>
          
          <ChartContainer config={chartConfig} className="h-[45vh] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={displayData}
                margin={{
                  top: 8,
                  right: 40,
                  left: 40,
                  bottom: 0,
                }}
                maxBarSize={80}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="action" 
                  angle={0}
                  textAnchor="middle"
                  height={showDetail ? 60 : 40}
                  fontSize={14}
                  interval={0}
                  tick={{ width: 100, textAnchor: 'middle' }}
                />
                <YAxis fontSize={14} />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                />
                {!showDetail ? (
                  <Bar 
                    dataKey="difference"
                    name="Économie CO₂"
                    radius={[8, 8, 0, 0]}
                  >
                    {displayData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(entry)} />
                    ))}
                  </Bar>
                ) : (
                  <Bar 
                    dataKey="value" 
                    name="Émissions CO₂"
                    radius={[8, 8, 0, 0]}
                  >
                    {displayData.map((entry, index) => (
                      <Cell key={`cell-detail-${index}`} fill={('type' in entry && entry.type === 'original') ? chartConfig.original.color : chartConfig.alternative.color} />
                    ))}
                  </Bar>
                )}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          <div className="mt-6 px-4">
            <p className="text-sm text-muted-foreground mb-4">
              {showDetail ? 'Émissions en kg CO₂ équivalent par an' : 'Économies en kg CO₂ équivalent par an'}
            </p>
            
            {showDetail && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2 text-primary-brand">Actions polluantes</h3>
                  <div className="space-y-1 text-sm">
                    {climateActions.map(action => (
                      <div key={`original-${action.id}`} className="flex items-center gap-2">
                        <span>{action.original.emoji}</span>
                        <span>{action.original.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-green-600">Alternatives écologiques</h3>
                  <div className="space-y-1 text-sm">
                    {climateActions.map(action => (
                      <div key={`alternative-${action.id}`} className="flex items-center gap-2">
                        <span>{action.alternative.emoji}</span>
                        <span>{action.alternative.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
